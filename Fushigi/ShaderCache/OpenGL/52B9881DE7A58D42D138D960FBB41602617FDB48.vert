#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 7) out vec4 out_attr7;
layout (location = 8) out vec4 out_attr8;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    int temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    int temp_16;
    uint temp_17;
    uint temp_18;
    int temp_19;
    precise float temp_20;
    int temp_21;
    uint temp_22;
    uint temp_23;
    int temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    int temp_34;
    uint temp_35;
    uint temp_36;
    int temp_37;
    precise float temp_38;
    int temp_39;
    uint temp_40;
    int temp_41;
    precise float temp_42;
    int temp_43;
    uint temp_44;
    uint temp_45;
    int temp_46;
    precise float temp_47;
    int temp_48;
    uint temp_49;
    int temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400370001 Mov
    // 0x000010: 0xEFD87F800807FF19 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079401B70003 Mov
    // 0x000030: 0xEFD87F801047FF12 Ald
    temp_3 = in_attr8.y;
    // 0x000038: 0x4C98079400A70004 Mov
    // 0x000048: 0xEFD87F800847FF02 Ald
    temp_4 = in_attr0.y;
    // 0x000050: 0x4C98079400B70013 Mov
    // 0x000058: 0xEFD87F800A07FF1E Ald
    temp_5 = in_attr2.x;
    // 0x000068: 0x4C98079400270018 Mov
    // 0x000070: 0xEFD87F800907FF1B Ald
    temp_6 = in_attr1.x;
    // 0x000078: 0x384800000047001D Shl
    temp_7 = temp_2 << 4;
    // 0x000088: 0xEFD87F800A47FF05 Ald
    temp_8 = in_attr2.y;
    // 0x000090: 0x4C98079401A70017 Mov
    // 0x000098: 0xEFD87F800947FF06 Ald
    temp_9 = in_attr1.y;
    // 0x0000A8: 0x4C68101000071907 Fmul
    temp_10 = temp_0 * vp_c4.data[0].x;
    // 0x0000B0: 0xEFD87F800887FF10 Ald
    temp_11 = in_attr0.z;
    // 0x0000B8: 0x4C68101000471915 Fmul
    temp_12 = temp_0 * vp_c4.data[1].x;
    // 0x0000C8: 0xEFD87F801007FF11 Ald
    temp_13 = in_attr8.x;
    // 0x0000D0: 0x4C68101000871919 Fmul
    temp_14 = temp_0 * vp_c4.data[2].x;
    // 0x0000D8: 0xEFD87F800A87FF0E Ald
    temp_15 = in_attr2.z;
    // 0x0000E8: 0xEF94007068871D0C Ldc
    temp_16 = temp_7 + 0x688;
    temp_17 = uint(temp_16) >> 2;
    temp_18 = temp_17 >> 2;
    temp_19 = int(temp_17) & 3;
    temp_20 = vp_c7.data[int(temp_18)][temp_19];
    // 0x0000F0: 0xEF94007048871D0F Ldc
    temp_21 = temp_7 + 0x488;
    temp_22 = uint(temp_21) >> 2;
    temp_23 = temp_22 >> 2;
    temp_24 = int(temp_22) & 3;
    temp_25 = vp_c7.data[int(temp_23)][temp_24];
    // 0x0000F8: 0x51A000940057121A Ffma
    temp_26 = fma(temp_3, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000108: 0xEFD87F800987FF0B Ald
    temp_27 = in_attr1.z;
    // 0x000110: 0x51A0019401D71216 Ffma
    temp_28 = fma(temp_3, vp_c5.data[6].w, vp_c5.data[7].y);
    // 0x000118: 0x49A0039000170207 Ffma
    temp_29 = fma(temp_4, vp_c4.data[0].y, temp_10);
    // 0x000128: 0x49A00A9000570215 Ffma
    temp_30 = fma(temp_4, vp_c4.data[1].y, temp_12);
    // 0x000130: 0x49A00C9000970219 Ffma
    temp_31 = fma(temp_4, vp_c4.data[2].y, temp_14);
    // 0x000138: 0x4C68101000871E0A Fmul
    temp_32 = temp_5 * vp_c4.data[2].x;
    // 0x000148: 0x4C68101000071B1C Fmul
    temp_33 = temp_6 * vp_c4.data[0].x;
    // 0x000150: 0xEF95007068071D00 Ldc
    temp_34 = temp_7 + 0x680;
    temp_35 = uint(temp_34) >> 2;
    temp_36 = temp_35 >> 2;
    temp_37 = int(temp_35) & 3;
    temp_38 = vp_c7.data[int(temp_36)][temp_37];
    temp_39 = int(temp_35) + 1;
    temp_40 = uint(temp_39) >> 2;
    temp_41 = temp_39 & 3;
    temp_42 = vp_c7.data[int(temp_40)][temp_41];
    // 0x000158: 0xEF95007048071D02 Ldc
    temp_43 = temp_7 + 0x480;
    temp_44 = uint(temp_43) >> 2;
    temp_45 = temp_44 >> 2;
    temp_46 = int(temp_44) & 3;
    temp_47 = vp_c7.data[int(temp_45)][temp_46];
    temp_48 = int(temp_44) + 1;
    temp_49 = uint(temp_48) >> 2;
    temp_50 = temp_48 & 3;
    temp_51 = vp_c7.data[int(temp_49)][temp_50];
    // 0x000168: 0x4C68101000871B09 Fmul
    temp_52 = temp_6 * vp_c4.data[2].x;
    // 0x000170: 0x4C68101000471B1B Fmul
    temp_53 = temp_6 * vp_c4.data[1].x;
    // 0x000178: 0x49A005100097050D Ffma
    temp_54 = fma(temp_8, vp_c4.data[2].y, temp_32);
    // 0x000188: 0x4C98079401270014 Mov
    // 0x000190: 0x49A00E100017060A Ffma
    temp_55 = fma(temp_9, vp_c4.data[0].y, temp_33);
    // 0x000198: 0x4C98079401370008 Mov
    // 0x0001A8: 0x49A00C9000A7101C Ffma
    temp_56 = fma(temp_11, vp_c4.data[2].z, temp_31);
    // 0x0001B0: 0x49A0049000970609 Ffma
    temp_57 = fma(temp_9, vp_c4.data[2].y, temp_52);
    // 0x0001B8: 0x49A00D9000570606 Ffma
    temp_58 = fma(temp_9, vp_c4.data[1].y, temp_53);
    // 0x0001C8: 0x51A0021400C71204 Ffma
    temp_59 = fma(temp_3, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x0001D0: 0x51A0099400D71213 Ffma
    temp_60 = fma(temp_3, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x0001D8: 0x51A00C1400471218 Ffma
    temp_61 = fma(temp_3, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0001E8: 0x51A00B9401C71217 Ffma
    temp_62 = fma(temp_3, vp_c5.data[6].z, vp_c5.data[7].x);
    // 0x0001F0: 0x51A00A1401471214 Ffma
    temp_63 = fma(temp_3, vp_c5.data[4].z, vp_c5.data[5].x);
    // 0x0001F8: 0x49A00D1400171119 Ffma
    temp_64 = fma(temp_13, vp_c5.data[0].y, temp_26);
    // 0x000208: 0x49A00A900067101B Ffma
    temp_65 = fma(temp_11, vp_c4.data[1].z, temp_30);
    // 0x000210: 0xEFD87F800AC7FF15 Ald
    temp_66 = in_attr2.w;
    // 0x000218: 0x51A0041401571212 Ffma
    temp_67 = fma(temp_3, vp_c5.data[4].w, vp_c5.data[5].y);
    // 0x000228: 0xEFF07F800D47FF19 Ast
    out_attr5.y = temp_64;
    // 0x000230: 0x4C58101000B71C1A Fadd
    temp_68 = temp_56 + vp_c4.data[2].w;
    // 0x000238: 0x4C68101000071E08 Fmul
    temp_69 = temp_5 * vp_c4.data[0].x;
    // 0x000248: 0x4C68101000471E1E Fmul
    temp_70 = temp_5 * vp_c4.data[1].x;
    // 0x000250: 0x4C58101000771B1C Fadd
    temp_71 = temp_65 + vp_c4.data[1].w;
    // 0x000258: 0x49A0039000271007 Ffma
    temp_72 = fma(temp_11, vp_c4.data[0].z, temp_29);
    // 0x000268: 0x49A0021400871104 Ffma
    temp_73 = fma(temp_13, vp_c5.data[2].x, temp_59);
    // 0x000270: 0x59A0060000F71A0C Ffma
    temp_74 = fma(temp_68, temp_25, temp_20);
    // 0x000278: 0xEFF07F800D87FF04 Ast
    out_attr5.z = temp_73;
    // 0x000288: 0x49A0041000170508 Ffma
    temp_75 = fma(temp_8, vp_c4.data[0].y, temp_69);
    // 0x000290: 0x49A00F1000570505 Ffma
    temp_76 = fma(temp_8, vp_c4.data[1].y, temp_70);
    // 0x000298: 0x59A0008000371C01 Ffma
    temp_77 = fma(temp_71, temp_51, temp_42);
    // 0x0002A8: 0x49A0051000270B0A Ffma
    temp_78 = fma(temp_27, vp_c4.data[0].z, temp_55);
    // 0x0002B0: 0x4C58101000370707 Fadd
    temp_79 = temp_72 + vp_c4.data[0].w;
    // 0x0002B8: 0x4C5810180BA70C03 Fadd
    temp_80 = temp_74 + vp_c6.data[46].z;
    // 0x0002C8: 0x49A0041000270E08 Ffma
    temp_81 = fma(temp_15, vp_c4.data[0].z, temp_75);
    // 0x0002D0: 0x49A0099400971113 Ffma
    temp_82 = fma(temp_13, vp_c5.data[2].y, temp_60);
    // 0x0002D8: 0x49A00C1400071118 Ffma
    temp_83 = fma(temp_13, vp_c5.data[0].x, temp_61);
    // 0x0002E8: 0xEFF07F800DC7FF13 Ast
    out_attr5.w = temp_82;
    // 0x0002F0: 0x49A00B9401871117 Ffma
    temp_84 = fma(temp_13, vp_c5.data[6].x, temp_62);
    // 0x0002F8: 0xEFF07F800D07FF18 Ast
    out_attr5.x = temp_83;
    // 0x000308: 0x49A00B1401971116 Ffma
    temp_85 = fma(temp_13, vp_c5.data[6].y, temp_28);
    // 0x000310: 0xEFF07F800E87FF17 Ast
    out_attr6.z = temp_84;
    // 0x000318: 0x49A00A1401071114 Ffma
    temp_86 = fma(temp_13, vp_c5.data[4].x, temp_63);
    // 0x000328: 0xEFF07F800EC7FF16 Ast
    out_attr6.w = temp_85;
    // 0x000330: 0x49A0091401171112 Ffma
    temp_87 = fma(temp_13, vp_c5.data[4].y, temp_67);
    // 0x000338: 0xEFF07F800E07FF14 Ast
    out_attr6.x = temp_86;
    // 0x000348: 0x49A0069000A70E0D Ffma
    temp_88 = fma(temp_15, vp_c4.data[2].z, temp_54);
    // 0x000350: 0xEFF07F800E47FF12 Ast
    out_attr6.y = temp_87;
    // 0x000358: 0x49A0029000670E05 Ffma
    temp_89 = fma(temp_15, vp_c4.data[1].z, temp_76);
    // 0x000368: 0x4C5810180B970104 Fadd
    temp_90 = temp_77 + vp_c6.data[46].y;
    // 0x000370: 0x4C6810180C67030E Fmul
    temp_91 = temp_80 * vp_c6.data[49].z;
    // 0x000378: 0x4C6810180C27030F Fmul
    temp_92 = temp_80 * vp_c6.data[48].z;
    // 0x000388: 0x4C6810180CA70311 Fmul
    temp_93 = temp_80 * vp_c6.data[50].z;
    // 0x000390: 0x49A0049000A70B09 Ffma
    temp_94 = fma(temp_27, vp_c4.data[2].z, temp_57);
    // 0x000398: 0x49A0031000670B06 Ffma
    temp_95 = fma(temp_27, vp_c4.data[1].z, temp_58);
    // 0x0003A8: 0x5C68100000870803 Fmul
    temp_96 = temp_81 * temp_81;
    // 0x0003B0: 0x5C68100000A70A0B Fmul
    temp_97 = temp_78 * temp_78;
    // 0x0003B8: 0x59A0000000270707 Ffma
    temp_98 = fma(temp_79, temp_47, temp_38);
    // 0x0003C8: 0x49A007180C57040E Ffma
    temp_99 = fma(temp_90, vp_c6.data[49].y, temp_91);
    // 0x0003D0: 0x49A007980C170402 Ffma
    temp_100 = fma(temp_90, vp_c6.data[48].y, temp_92);
    // 0x0003D8: 0x49A008980C970400 Ffma
    temp_101 = fma(temp_90, vp_c6.data[50].y, temp_93);
    // 0x0003E8: 0x59A0018000570504 Ffma
    temp_102 = fma(temp_89, temp_89, temp_96);
    // 0x0003F0: 0x59A0058000670613 Ffma
    temp_103 = fma(temp_95, temp_95, temp_97);
    // 0x0003F8: 0x4C5810180B87070F Fadd
    temp_104 = temp_98 + vp_c6.data[46].x;
    // 0x000408: 0x4C68100C00470703 Fmul
    temp_105 = temp_98 * vp_c3.data[1].x;
    // 0x000410: 0x4C68100C00870710 Fmul
    temp_106 = temp_98 * vp_c3.data[2].x;
    // 0x000418: 0x4C68100C0007070B Fmul
    temp_107 = temp_98 * vp_c3.data[0].x;
    // 0x000428: 0x59A0020000D70D11 Ffma
    temp_108 = fma(temp_88, temp_88, temp_102);
    // 0x000430: 0x4C58300C02F70716 Fadd
    temp_109 = 0.0 - vp_c3.data[11].w;
    temp_110 = temp_98 + temp_109;
    // 0x000438: 0x59A0098000970904 Ffma
    temp_111 = fma(temp_94, temp_94, temp_103);
    // 0x000448: 0xEFF07F800B07FF16 Ast
    out_attr3.x = temp_110;
    // 0x000450: 0x4C5830180B070707 Fadd
    temp_112 = 0.0 - vp_c6.data[44].x;
    temp_113 = temp_98 + temp_112;
    // 0x000458: 0x5080000000570404 Mufu
    temp_114 = inversesqrt(temp_111);
    // 0x000468: 0x49A001180C070F12 Ffma
    temp_115 = fma(temp_104, vp_c6.data[48].x, temp_100);
    // 0x000470: 0x5080000000571102 Mufu
    temp_116 = inversesqrt(temp_108);
    // 0x000478: 0x49A007180C470F14 Ffma
    temp_117 = fma(temp_104, vp_c6.data[49].x, temp_99);
    // 0x000488: 0x49A000180C870F00 Ffma
    temp_118 = fma(temp_104, vp_c6.data[50].x, temp_101);
    // 0x000490: 0x49A0018C00570103 Ffma
    temp_119 = fma(temp_77, vp_c3.data[1].y, temp_105);
    // 0x000498: 0x49A0058C0017010B Ffma
    temp_120 = fma(temp_77, vp_c3.data[0].y, temp_107);
    // 0x0004A8: 0x4C6810180387070E Fmul
    temp_121 = temp_113 * vp_c6.data[14].x;
    // 0x0004B0: 0x49A0080C00970107 Ffma
    temp_122 = fma(temp_77, vp_c3.data[2].y, temp_106);
    // 0x0004B8: 0x4C58101002070C10 Fadd
    temp_123 = temp_74 + vp_c4.data[8].x;
    // 0x0004C8: 0x4C58300C03370117 Fadd
    temp_124 = 0.0 - vp_c3.data[12].w;
    temp_125 = temp_77 + temp_124;
    // 0x0004D0: 0x4C5830180B170113 Fadd
    temp_126 = 0.0 - vp_c6.data[44].y;
    temp_127 = temp_77 + temp_126;
    // 0x0004D8: 0xEFF07F800B47FF17 Ast
    out_attr3.y = temp_125;
    // 0x0004E8: 0x4C6810180BB70011 Fmul
    temp_128 = temp_118 * vp_c6.data[46].w;
    // 0x0004F0: 0x5C6810000047090F Fmul
    temp_129 = temp_94 * temp_114;
    // 0x0004F8: 0xEFF07F801087FF11 Ast
    out_attr8.z = temp_128;
    // 0x000508: 0x49A0018C00671001 Ffma
    temp_130 = fma(temp_123, vp_c3.data[1].z, temp_119);
    // 0x000510: 0xEFF07F800887FF0F Ast
    out_attr0.z = temp_129;
    // 0x000518: 0x5C68100000270505 Fmul
    temp_131 = temp_89 * temp_116;
    // 0x000528: 0x49A0038C00A71000 Ffma
    temp_132 = fma(temp_123, vp_c3.data[2].z, temp_122);
    // 0x000530: 0xEFF07F800947FF05 Ast
    out_attr1.y = temp_131;
    // 0x000538: 0x5C68100000470A0A Fmul
    temp_133 = temp_78 * temp_114;
    // 0x000548: 0x5C68100000270D0D Fmul
    temp_134 = temp_88 * temp_116;
    // 0x000550: 0xEFF07F800807FF0A Ast
    out_attr0.x = temp_133;
    // 0x000558: 0x49A0058C00271010 Ffma
    temp_135 = fma(temp_123, vp_c3.data[0].z, temp_120);
    // 0x000568: 0xEFF07F800987FF0D Ast
    out_attr1.z = temp_134;
    // 0x000570: 0x49A0058C00270C0B Ffma
    temp_136 = fma(temp_74, vp_c3.data[0].z, temp_120);
    // 0x000578: 0x49A007180397130E Ffma
    temp_137 = fma(temp_127, vp_c6.data[14].y, temp_121);
    // 0x000588: 0x5C68100000470606 Fmul
    temp_138 = temp_95 * temp_114;
    // 0x000590: 0x4C5830180B270C09 Fadd
    temp_139 = 0.0 - vp_c6.data[44].z;
    temp_140 = temp_74 + temp_139;
    // 0x000598: 0xEFF07F800847FF06 Ast
    out_attr0.y = temp_138;
    // 0x0005A8: 0x5C68100000F70504 Fmul
    temp_141 = temp_131 * temp_129;
    // 0x0005B0: 0x5C68100000270808 Fmul
    temp_142 = temp_81 * temp_116;
    // 0x0005B8: 0x5C68100000A70D02 Fmul
    temp_143 = temp_134 * temp_133;
    // 0x0005C8: 0xEFF07F800907FF08 Ast
    out_attr1.x = temp_142;
    // 0x0005D0: 0x49A0018C00670C03 Ffma
    temp_144 = fma(temp_74, vp_c3.data[1].z, temp_119);
    // 0x0005D8: 0x4C58100C00370B0B Fadd
    temp_145 = temp_136 + vp_c3.data[0].w;
    // 0x0005E8: 0x4C58300C03770C18 Fadd
    temp_146 = 0.0 - vp_c3.data[13].w;
    temp_147 = temp_74 + temp_146;
    // 0x0005F0: 0x49A0038C00A70C07 Ffma
    temp_148 = fma(temp_74, vp_c3.data[2].z, temp_122);
    // 0x0005F8: 0xEFF07F800B87FF18 Ast
    out_attr3.z = temp_147;
    // 0x000608: 0x49A0071803A70909 Ffma
    temp_149 = fma(temp_140, vp_c6.data[14].z, temp_137);
    // 0x000610: 0x59A2020000670D0E Ffma
    temp_150 = 0.0 - temp_141;
    temp_151 = fma(temp_134, temp_138, temp_150);
    // 0x000618: 0x5C6810000067080C Fmul
    temp_152 = temp_142 * temp_138;
    // 0x000628: 0x59A2010000F70806 Ffma
    temp_153 = 0.0 - temp_143;
    temp_154 = fma(temp_142, temp_129, temp_153);
    // 0x000630: 0x4C58100C00770303 Fadd
    temp_155 = temp_144 + vp_c3.data[1].w;
    // 0x000638: 0x4C68101802C70B02 Fmul
    temp_156 = temp_145 * vp_c6.data[11].x;
    // 0x000648: 0x4C58100C00371010 Fadd
    temp_157 = temp_135 + vp_c3.data[0].w;
    // 0x000650: 0x4C58100C00770101 Fadd
    temp_158 = temp_130 + vp_c3.data[1].w;
    // 0x000658: 0x59A2060000A7050C Ffma
    temp_159 = 0.0 - temp_152;
    temp_160 = fma(temp_131, temp_133, temp_159);
    // 0x000668: 0x5C68100001570605 Fmul
    temp_161 = temp_154 * temp_66;
    // 0x000670: 0x4C58100C00B70707 Fadd
    temp_162 = temp_148 + vp_c3.data[2].w;
    // 0x000678: 0xEFF07F800A47FF05 Ast
    out_attr2.y = temp_161;
    // 0x000688: 0x49A0011802D70304 Ffma
    temp_163 = fma(temp_155, vp_c6.data[11].y, temp_156);
    // 0x000690: 0xEFF07F800C87FF07 Ast
    out_attr4.z = temp_162;
    // 0x000698: 0x4C68100C02071002 Fmul
    temp_164 = temp_157 * vp_c3.data[8].x;
    // 0x0006A8: 0x4C68100C02871003 Fmul
    temp_165 = temp_157 * vp_c3.data[10].x;
    // 0x0006B0: 0x4C68100C02471006 Fmul
    temp_166 = temp_157 * vp_c3.data[9].x;
    // 0x0006B8: 0x4C68100C01C71010 Fmul
    temp_167 = temp_157 * vp_c3.data[7].x;
    // 0x0006C8: 0x4C58100C00B70000 Fadd
    temp_168 = temp_132 + vp_c3.data[2].w;
    // 0x0006D0: 0x49A0021802E70704 Ffma
    temp_169 = fma(temp_162, vp_c6.data[11].z, temp_163);
    // 0x0006D8: 0x49A0010C02170102 Ffma
    temp_170 = fma(temp_158, vp_c3.data[8].y, temp_164);
    // 0x0006E8: 0x49A0018C02970103 Ffma
    temp_171 = fma(temp_158, vp_c3.data[10].y, temp_165);
    // 0x0006F0: 0x49A0030C02570106 Ffma
    temp_172 = fma(temp_158, vp_c3.data[9].y, temp_166);
    // 0x0006F8: 0x49A0080C01D70101 Ffma
    temp_173 = fma(temp_158, vp_c3.data[7].y, temp_167);
    // 0x000708: 0x4C98079803C7000B Mov
    // 0x000710: 0x4C98079803070007 Mov
    // 0x000718: 0x49A0010C02270002 Ffma
    temp_174 = fma(temp_168, vp_c3.data[8].z, temp_170);
    // 0x000728: 0x49A0018C02A70003 Ffma
    temp_175 = fma(temp_168, vp_c3.data[10].z, temp_171);
    // 0x000730: 0x49A0030C02670006 Ffma
    temp_176 = fma(temp_168, vp_c3.data[9].z, temp_172);
    // 0x000738: 0x49A0008C01E70001 Ffma
    temp_177 = fma(temp_168, vp_c3.data[7].z, temp_173);
    // 0x000748: 0x4C6810180BB71414 Fmul
    temp_178 = temp_117 * vp_c6.data[46].w;
    // 0x000750: 0x4C6810180BB71212 Fmul
    temp_179 = temp_115 * vp_c6.data[46].w;
    // 0x000758: 0xEFF07F801047FF14 Ast
    out_attr8.y = temp_178;
    // 0x000768: 0x51A0059803B70909 Ffma
    temp_180 = fma(temp_149, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000770: 0xEFF07F801007FF12 Ast
    out_attr8.x = temp_179;
    // 0x000778: 0x5C68100001570E0E Fmul
    temp_181 = temp_151 * temp_66;
    // 0x000788: 0xEFF07F800F47FF09 Ast
    out_attr7.y = temp_180;
    // 0x000790: 0x5C68100001570C0C Fmul
    temp_182 = temp_160 * temp_66;
    // 0x000798: 0xEFF07F800A07FF0E Ast
    out_attr2.x = temp_181;
    // 0x0007A8: 0x51A0039802F70404 Ffma
    temp_183 = fma(temp_169, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x0007B0: 0xEFF07F800A87FF0C Ast
    out_attr2.z = temp_182;
    // 0x0007B8: 0x4C58100C02370202 Fadd
    temp_184 = temp_174 + vp_c3.data[8].w;
    // 0x0007C8: 0xEFF07F800F07FF04 Ast
    out_attr7.x = temp_183;
    // 0x0007D0: 0x4C58100C02B70303 Fadd
    temp_185 = temp_175 + vp_c3.data[10].w;
    // 0x0007D8: 0xEFF07F800747FF02 Ast
    gl_Position.y = temp_184;
    // 0x0007E8: 0x4C58100C02770606 Fadd
    temp_186 = temp_176 + vp_c3.data[9].w;
    // 0x0007F0: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_185;
    // 0x0007F8: 0x4C58100C01F70101 Fadd
    temp_187 = temp_177 + vp_c3.data[7].w;
    // 0x000808: 0xEFF07F800787FF06 Ast
    gl_Position.z = temp_186;
    // 0x000810: 0xEFF07F800707FF01 Ast
    gl_Position.x = temp_187;
    // 0x000818: 0xE30000000007000F Exit
    return;
}

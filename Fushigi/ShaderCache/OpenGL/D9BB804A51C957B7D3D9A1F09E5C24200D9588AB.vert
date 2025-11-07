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
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 7) out vec4 out_attr7;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;


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
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    int temp_41;
    uint temp_42;
    uint temp_43;
    int temp_44;
    precise float temp_45;
    int temp_46;
    uint temp_47;
    int temp_48;
    precise float temp_49;
    int temp_50;
    uint temp_51;
    uint temp_52;
    int temp_53;
    precise float temp_54;
    int temp_55;
    uint temp_56;
    int temp_57;
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
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400A70008 Mov
    // 0x000010: 0xEFD87F800807FF07 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A19 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079400B7000D Mov
    // 0x000030: 0xEFD87F801047FF16 Ald
    temp_3 = in_attr8.y;
    // 0x000038: 0x4C98079400270018 Mov
    // 0x000048: 0xEFD87F800847FF01 Ald
    temp_4 = in_attr0.y;
    // 0x000050: 0x4C98079400370014 Mov
    // 0x000058: 0xEFD87F800A07FF00 Ald
    temp_5 = in_attr2.x;
    // 0x000068: 0x4C98079401270015 Mov
    // 0x000070: 0xEFD87F800907FF06 Ald
    temp_6 = in_attr1.x;
    // 0x000078: 0x3848000000471919 Shl
    temp_7 = temp_2 << 4;
    // 0x000088: 0xEFD87F800947FF05 Ald
    temp_8 = in_attr1.y;
    // 0x000090: 0x4C98079401370003 Mov
    // 0x000098: 0xEFD87F800887FF0E Ald
    temp_9 = in_attr0.z;
    // 0x0000A8: 0x4C6810100007070F Fmul
    temp_10 = temp_0 * vp_c4.data[0].x;
    // 0x0000B0: 0xEFD87F801007FF17 Ald
    temp_11 = in_attr8.x;
    // 0x0000B8: 0x4C68101000470713 Fmul
    temp_12 = temp_0 * vp_c4.data[1].x;
    // 0x0000C8: 0xEFD87F800A47FF04 Ald
    temp_13 = in_attr2.y;
    // 0x0000D0: 0x4C68101000870707 Fmul
    temp_14 = temp_0 * vp_c4.data[2].x;
    // 0x0000D8: 0xEFD87F800A87FF09 Ald
    temp_15 = in_attr2.z;
    // 0x0000E8: 0xEF94007068871911 Ldc
    temp_16 = temp_7 + 0x688;
    temp_17 = uint(temp_16) >> 2;
    temp_18 = temp_17 >> 2;
    temp_19 = int(temp_17) & 3;
    temp_20 = vp_c7.data[int(temp_18)][temp_19];
    // 0x0000F0: 0xEF94007048871912 Ldc
    temp_21 = temp_7 + 0x488;
    temp_22 = uint(temp_21) >> 2;
    temp_23 = temp_22 >> 2;
    temp_24 = int(temp_22) & 3;
    temp_25 = vp_c7.data[int(temp_23)][temp_24];
    // 0x0000F8: 0x51A0041400C71608 Ffma
    temp_26 = fma(temp_3, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x000108: 0xEFD87F800987FF0C Ald
    temp_27 = in_attr1.z;
    // 0x000110: 0x51A0069400D7160D Ffma
    temp_28 = fma(temp_3, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x000118: 0xEFD87F8014C7FF0B Ald
    temp_29 = in_attr12.w;
    // 0x000128: 0x51A00C1400471618 Ffma
    temp_30 = fma(temp_3, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000130: 0x51A00A1400571614 Ffma
    temp_31 = fma(temp_3, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000138: 0x51A00A9401471615 Ffma
    temp_32 = fma(temp_3, vp_c5.data[4].z, vp_c5.data[5].x);
    // 0x000148: 0x51A0019401571616 Ffma
    temp_33 = fma(temp_3, vp_c5.data[4].w, vp_c5.data[5].y);
    // 0x000150: 0x49A007900017010F Ffma
    temp_34 = fma(temp_4, vp_c4.data[0].y, temp_10);
    // 0x000158: 0x49A0099000570113 Ffma
    temp_35 = fma(temp_4, vp_c4.data[1].y, temp_12);
    // 0x000168: 0x49A0039000970107 Ffma
    temp_36 = fma(temp_4, vp_c4.data[2].y, temp_14);
    // 0x000170: 0x4C6810100007000A Fmul
    temp_37 = temp_5 * vp_c4.data[0].x;
    // 0x000178: 0x4C6810100087001D Fmul
    temp_38 = temp_5 * vp_c4.data[2].x;
    // 0x000188: 0x4C6810100047001E Fmul
    temp_39 = temp_5 * vp_c4.data[1].x;
    // 0x000190: 0x4C6810100087061C Fmul
    temp_40 = temp_6 * vp_c4.data[2].x;
    // 0x000198: 0xEF95007068071900 Ldc
    temp_41 = temp_7 + 0x680;
    temp_42 = uint(temp_41) >> 2;
    temp_43 = temp_42 >> 2;
    temp_44 = int(temp_42) & 3;
    temp_45 = vp_c7.data[int(temp_43)][temp_44];
    temp_46 = int(temp_42) + 1;
    temp_47 = uint(temp_46) >> 2;
    temp_48 = temp_46 & 3;
    temp_49 = vp_c7.data[int(temp_47)][temp_48];
    // 0x0001A8: 0xEF95007048071902 Ldc
    temp_50 = temp_7 + 0x480;
    temp_51 = uint(temp_50) >> 2;
    temp_52 = temp_51 >> 2;
    temp_53 = int(temp_51) & 3;
    temp_54 = vp_c7.data[int(temp_52)][temp_53];
    temp_55 = int(temp_51) + 1;
    temp_56 = uint(temp_55) >> 2;
    temp_57 = temp_55 & 3;
    temp_58 = vp_c7.data[int(temp_56)][temp_57];
    // 0x0001B0: 0x4C6810100007061A Fmul
    temp_59 = temp_6 * vp_c4.data[0].x;
    // 0x0001B8: 0x4C6810100047061B Fmul
    temp_60 = temp_6 * vp_c4.data[1].x;
    // 0x0001C8: 0x49A0051000170410 Ffma
    temp_61 = fma(temp_13, vp_c4.data[0].y, temp_37);
    // 0x0001D0: 0x49A00E1000970506 Ffma
    temp_62 = fma(temp_8, vp_c4.data[2].y, temp_40);
    // 0x0001D8: 0x49A0039000A70E1C Ffma
    temp_63 = fma(temp_9, vp_c4.data[2].z, temp_36);
    // 0x0001E8: 0x49A0079000270E0F Ffma
    temp_64 = fma(temp_9, vp_c4.data[0].z, temp_34);
    // 0x0001F0: 0x49A00D1000170507 Ffma
    temp_65 = fma(temp_8, vp_c4.data[0].y, temp_59);
    // 0x0001F8: 0x49A0099000670E19 Ffma
    temp_66 = fma(temp_9, vp_c4.data[1].z, temp_35);
    // 0x000208: 0x49A00C1400071713 Ffma
    temp_67 = fma(temp_11, vp_c5.data[0].x, temp_30);
    // 0x000210: 0x49A00E900097040A Ffma
    temp_68 = fma(temp_13, vp_c4.data[2].y, temp_38);
    // 0x000218: 0x4C58101000B71C1C Fadd
    temp_69 = temp_63 + vp_c4.data[2].w;
    // 0x000228: 0x49A00D9000570505 Ffma
    temp_70 = fma(temp_8, vp_c4.data[1].y, temp_60);
    // 0x000230: 0x49A00F1000570404 Ffma
    temp_71 = fma(temp_13, vp_c4.data[1].y, temp_39);
    // 0x000238: 0x4C58101000771918 Fadd
    temp_72 = temp_66 + vp_c4.data[1].w;
    // 0x000248: 0x49A0081000270910 Ffma
    temp_73 = fma(temp_15, vp_c4.data[0].z, temp_61);
    // 0x000250: 0x49A0041400871708 Ffma
    temp_74 = fma(temp_11, vp_c5.data[2].x, temp_26);
    // 0x000258: 0x59A0088001271C11 Ffma
    temp_75 = fma(temp_69, temp_25, temp_20);
    // 0x000268: 0x49A006940097170D Ffma
    temp_76 = fma(temp_11, vp_c5.data[2].y, temp_28);
    // 0x000270: 0x49A00A1400171714 Ffma
    temp_77 = fma(temp_11, vp_c5.data[0].y, temp_31);
    // 0x000278: 0x49A00A9401071715 Ffma
    temp_78 = fma(temp_11, vp_c5.data[4].x, temp_32);
    // 0x000288: 0x49A0039000270C07 Ffma
    temp_79 = fma(temp_27, vp_c4.data[0].z, temp_65);
    // 0x000290: 0x49A00B1401171717 Ffma
    temp_80 = fma(temp_11, vp_c5.data[4].y, temp_33);
    // 0x000298: 0xEFD87F800AC7FF16 Ald
    temp_81 = in_attr2.w;
    // 0x0002A8: 0x4C58101000370F0F Fadd
    temp_82 = temp_64 + vp_c4.data[0].w;
    // 0x0002B0: 0xEFF07F800BC7FF0B Ast
    out_attr3.w = temp_29;
    // 0x0002B8: 0x59A0008000371801 Ffma
    temp_83 = fma(temp_72, temp_58, temp_49);
    // 0x0002C8: 0xEFF07F800E87FF08 Ast
    out_attr6.z = temp_74;
    // 0x0002D0: 0x4C5810180BA71103 Fadd
    temp_84 = temp_75 + vp_c6.data[46].z;
    // 0x0002D8: 0xEFF07F800EC7FF0D Ast
    out_attr6.w = temp_76;
    // 0x0002E8: 0x49A0031000A70C06 Ffma
    temp_85 = fma(temp_27, vp_c4.data[2].z, temp_62);
    // 0x0002F0: 0xEFF07F800E07FF13 Ast
    out_attr6.x = temp_67;
    // 0x0002F8: 0x49A0029000670C05 Ffma
    temp_86 = fma(temp_27, vp_c4.data[1].z, temp_70);
    // 0x000308: 0xEFF07F800E47FF14 Ast
    out_attr6.y = temp_77;
    // 0x000310: 0x49A0051000A7090A Ffma
    temp_87 = fma(temp_15, vp_c4.data[2].z, temp_68);
    // 0x000318: 0xEFF07F800F07FF15 Ast
    out_attr7.x = temp_78;
    // 0x000328: 0x49A0021000670904 Ffma
    temp_88 = fma(temp_15, vp_c4.data[1].z, temp_71);
    // 0x000330: 0xEFF07F800F47FF17 Ast
    out_attr7.y = temp_80;
    // 0x000338: 0x4C5810180B97010B Fadd
    temp_89 = temp_83 + vp_c6.data[46].y;
    // 0x000348: 0x4C6810180C27030C Fmul
    temp_90 = temp_84 * vp_c6.data[48].z;
    // 0x000350: 0x5C68100001071009 Fmul
    temp_91 = temp_73 * temp_73;
    // 0x000358: 0x4C6810180CA70312 Fmul
    temp_92 = temp_84 * vp_c6.data[50].z;
    // 0x000368: 0x5C68100000770708 Fmul
    temp_93 = temp_79 * temp_79;
    // 0x000370: 0x4C6810180C67030E Fmul
    temp_94 = temp_84 * vp_c6.data[49].z;
    // 0x000378: 0x59A0000000270F0F Ffma
    temp_95 = fma(temp_82, temp_54, temp_45);
    // 0x000388: 0x49A006180C170B02 Ffma
    temp_96 = fma(temp_89, vp_c6.data[48].y, temp_90);
    // 0x000390: 0x59A004800047040C Ffma
    temp_97 = fma(temp_88, temp_88, temp_91);
    // 0x000398: 0x49A009180C970B00 Ffma
    temp_98 = fma(temp_89, vp_c6.data[50].y, temp_92);
    // 0x0003A8: 0x59A004000057050D Ffma
    temp_99 = fma(temp_86, temp_86, temp_93);
    // 0x0003B0: 0x49A007180C570B03 Ffma
    temp_100 = fma(temp_89, vp_c6.data[49].y, temp_94);
    // 0x0003B8: 0x4C5810180B870F09 Fadd
    temp_101 = temp_95 + vp_c6.data[46].x;
    // 0x0003C8: 0x4C5830180B070F12 Fadd
    temp_102 = 0.0 - vp_c6.data[44].x;
    temp_103 = temp_95 + temp_102;
    // 0x0003D0: 0x4C68100C00470F08 Fmul
    temp_104 = temp_95 * vp_c3.data[1].x;
    // 0x0003D8: 0x4C68100C00870F0E Fmul
    temp_105 = temp_95 * vp_c3.data[2].x;
    // 0x0003E8: 0x4C68100C00070F0B Fmul
    temp_106 = temp_95 * vp_c3.data[0].x;
    // 0x0003F0: 0x4C58300C02F70F18 Fadd
    temp_107 = 0.0 - vp_c3.data[11].w;
    temp_108 = temp_95 + temp_107;
    // 0x0003F8: 0x59A0060000A70A0F Ffma
    temp_109 = fma(temp_87, temp_87, temp_97);
    // 0x000408: 0xEFF07F800C07FF18 Ast
    out_attr4.x = temp_108;
    // 0x000410: 0x59A006800067060C Ffma
    temp_110 = fma(temp_85, temp_85, temp_99);
    // 0x000418: 0x4C5830180B17010D Fadd
    temp_111 = 0.0 - vp_c6.data[44].y;
    temp_112 = temp_83 + temp_111;
    // 0x000428: 0x5080000000570C0C Mufu
    temp_113 = inversesqrt(temp_110);
    // 0x000430: 0x49A001980C470913 Ffma
    temp_114 = fma(temp_101, vp_c6.data[49].x, temp_100);
    // 0x000438: 0x5080000000570F03 Mufu
    temp_115 = inversesqrt(temp_109);
    // 0x000448: 0x4C68101803871212 Fmul
    temp_116 = temp_103 * vp_c6.data[14].x;
    // 0x000450: 0x49A001180C070914 Ffma
    temp_117 = fma(temp_101, vp_c6.data[48].x, temp_96);
    // 0x000458: 0x49A000180C870900 Ffma
    temp_118 = fma(temp_101, vp_c6.data[50].x, temp_98);
    // 0x000468: 0x49A0040C00570108 Ffma
    temp_119 = fma(temp_83, vp_c3.data[1].y, temp_104);
    // 0x000470: 0x49A0070C00970102 Ffma
    temp_120 = fma(temp_83, vp_c3.data[2].y, temp_105);
    // 0x000478: 0x49A0058C0017010B Ffma
    temp_121 = fma(temp_83, vp_c3.data[0].y, temp_106);
    // 0x000488: 0x49A0091803970D09 Ffma
    temp_122 = fma(temp_112, vp_c6.data[14].y, temp_116);
    // 0x000490: 0x4C5810100207110D Fadd
    temp_123 = temp_75 + vp_c4.data[8].x;
    // 0x000498: 0x4C58300C03370115 Fadd
    temp_124 = 0.0 - vp_c3.data[12].w;
    temp_125 = temp_83 + temp_124;
    // 0x0004A8: 0x4C6810180BB7000F Fmul
    temp_126 = temp_118 * vp_c6.data[46].w;
    // 0x0004B0: 0xEFF07F800C47FF15 Ast
    out_attr4.y = temp_125;
    // 0x0004B8: 0x49A0040C00670D01 Ffma
    temp_127 = fma(temp_123, vp_c3.data[1].z, temp_119);
    // 0x0004C8: 0xEFF07F801187FF0F Ast
    out_attr9.z = temp_126;
    // 0x0004D0: 0x49A0010C00A70D00 Ffma
    temp_128 = fma(temp_123, vp_c3.data[2].z, temp_120);
    // 0x0004D8: 0x5C68100000C70606 Fmul
    temp_129 = temp_85 * temp_113;
    // 0x0004E8: 0x5C68100000370404 Fmul
    temp_130 = temp_88 * temp_115;
    // 0x0004F0: 0xEFF07F800887FF06 Ast
    out_attr0.z = temp_129;
    // 0x0004F8: 0x49A0058C00270D0D Ffma
    temp_131 = fma(temp_123, vp_c3.data[0].z, temp_121);
    // 0x000508: 0xEFF07F800947FF04 Ast
    out_attr1.y = temp_130;
    // 0x000510: 0x49A0058C0027110B Ffma
    temp_132 = fma(temp_75, vp_c3.data[0].z, temp_121);
    // 0x000518: 0x5C68100000C70707 Fmul
    temp_133 = temp_79 * temp_113;
    // 0x000528: 0x5C68100000C70505 Fmul
    temp_134 = temp_86 * temp_113;
    // 0x000530: 0xEFF07F800807FF07 Ast
    out_attr0.x = temp_133;
    // 0x000538: 0x5C68100000370A0A Fmul
    temp_135 = temp_87 * temp_115;
    // 0x000548: 0xEFF07F800847FF05 Ast
    out_attr0.y = temp_134;
    // 0x000550: 0x5C6810000067040C Fmul
    temp_136 = temp_130 * temp_129;
    // 0x000558: 0xEFF07F800987FF0A Ast
    out_attr1.z = temp_135;
    // 0x000568: 0x49A0040C00671108 Ffma
    temp_137 = fma(temp_75, vp_c3.data[1].z, temp_119);
    // 0x000570: 0x5C68100000371010 Fmul
    temp_138 = temp_73 * temp_115;
    // 0x000578: 0x4C58100C00370B0B Fadd
    temp_139 = temp_132 + vp_c3.data[0].w;
    // 0x000588: 0xEFF07F800907FF10 Ast
    out_attr1.x = temp_138;
    // 0x000590: 0x4C5830180B27110E Fadd
    temp_140 = 0.0 - vp_c6.data[44].z;
    temp_141 = temp_75 + temp_140;
    // 0x000598: 0x5C68100000770A03 Fmul
    temp_142 = temp_135 * temp_133;
    // 0x0005A8: 0x59A2060000570A0C Ffma
    temp_143 = 0.0 - temp_136;
    temp_144 = fma(temp_135, temp_134, temp_143);
    // 0x0005B0: 0x49A0010C00A71102 Ffma
    temp_145 = fma(temp_75, vp_c3.data[2].z, temp_120);
    // 0x0005B8: 0x5C68100000571005 Fmul
    temp_146 = temp_138 * temp_134;
    // 0x0005C8: 0x4C58100C00770808 Fadd
    temp_147 = temp_137 + vp_c3.data[1].w;
    // 0x0005D0: 0x4C68101802C70B0B Fmul
    temp_148 = temp_139 * vp_c6.data[11].x;
    // 0x0005D8: 0x4C58100C00370D0D Fadd
    temp_149 = temp_131 + vp_c3.data[0].w;
    // 0x0005E8: 0x49A0049803A70E0E Ffma
    temp_150 = fma(temp_141, vp_c6.data[14].z, temp_122);
    // 0x0005F0: 0x59A2018000671009 Ffma
    temp_151 = 0.0 - temp_142;
    temp_152 = fma(temp_138, temp_129, temp_151);
    // 0x0005F8: 0x4C58100C00B70203 Fadd
    temp_153 = temp_145 + vp_c3.data[2].w;
    // 0x000608: 0x59A2028000770405 Ffma
    temp_154 = 0.0 - temp_146;
    temp_155 = fma(temp_130, temp_133, temp_154);
    // 0x000610: 0xEFF07F800D87FF03 Ast
    out_attr5.z = temp_153;
    // 0x000618: 0x49A0059802D70808 Ffma
    temp_156 = fma(temp_147, vp_c6.data[11].y, temp_148);
    // 0x000628: 0x4C58100C00770101 Fadd
    temp_157 = temp_127 + vp_c3.data[1].w;
    // 0x000630: 0x4C68100C02870D04 Fmul
    temp_158 = temp_149 * vp_c3.data[10].x;
    // 0x000638: 0x4C68100C02070D02 Fmul
    temp_159 = temp_149 * vp_c3.data[8].x;
    // 0x000648: 0x4C68100C02470D06 Fmul
    temp_160 = temp_149 * vp_c3.data[9].x;
    // 0x000650: 0x4C58100C00B70000 Fadd
    temp_161 = temp_128 + vp_c3.data[2].w;
    // 0x000658: 0x49A0041802E70308 Ffma
    temp_162 = fma(temp_153, vp_c6.data[11].z, temp_156);
    // 0x000668: 0x4C98079803C7000F Mov
    // 0x000670: 0x49A0020C02970103 Ffma
    temp_163 = fma(temp_157, vp_c3.data[10].y, temp_158);
    // 0x000678: 0x4C68100C01C70D04 Fmul
    temp_164 = temp_149 * vp_c3.data[7].x;
    // 0x000688: 0x49A0010C02170102 Ffma
    temp_165 = fma(temp_157, vp_c3.data[8].y, temp_159);
    // 0x000690: 0x49A0030C02570106 Ffma
    temp_166 = fma(temp_157, vp_c3.data[9].y, temp_160);
    // 0x000698: 0x4C98079803070007 Mov
    // 0x0006A8: 0x4C58300C03771117 Fadd
    temp_167 = 0.0 - vp_c3.data[13].w;
    temp_168 = temp_75 + temp_167;
    // 0x0006B0: 0x49A0018C02A70003 Ffma
    temp_169 = fma(temp_161, vp_c3.data[10].z, temp_163);
    // 0x0006B8: 0xEFF07F800C87FF17 Ast
    out_attr4.z = temp_168;
    // 0x0006C8: 0x49A0020C01D70101 Ffma
    temp_170 = fma(temp_157, vp_c3.data[7].y, temp_164);
    // 0x0006D0: 0x49A0010C02270002 Ffma
    temp_171 = fma(temp_161, vp_c3.data[8].z, temp_165);
    // 0x0006D8: 0x49A0030C02670006 Ffma
    temp_172 = fma(temp_161, vp_c3.data[9].z, temp_166);
    // 0x0006E8: 0x4C6810180BB71313 Fmul
    temp_173 = temp_114 * vp_c6.data[46].w;
    // 0x0006F0: 0x4C6810180BB71414 Fmul
    temp_174 = temp_117 * vp_c6.data[46].w;
    // 0x0006F8: 0xEFF07F801147FF13 Ast
    out_attr9.y = temp_173;
    // 0x000708: 0x49A0008C01E70001 Ffma
    temp_175 = fma(temp_161, vp_c3.data[7].z, temp_170);
    // 0x000710: 0xEFF07F801107FF14 Ast
    out_attr9.x = temp_174;
    // 0x000718: 0x51A0079803B70E0E Ffma
    temp_176 = fma(temp_150, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000728: 0x5C68100001670C0C Fmul
    temp_177 = temp_144 * temp_81;
    // 0x000730: 0xEFF07F801047FF0E Ast
    out_attr8.y = temp_176;
    // 0x000738: 0x5C68100001670909 Fmul
    temp_178 = temp_152 * temp_81;
    // 0x000748: 0xEFF07F800A07FF0C Ast
    out_attr2.x = temp_177;
    // 0x000750: 0x5C68100001670505 Fmul
    temp_179 = temp_155 * temp_81;
    // 0x000758: 0xEFF07F800A47FF09 Ast
    out_attr2.y = temp_178;
    // 0x000768: 0x51A0039802F70808 Ffma
    temp_180 = fma(temp_162, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000770: 0xEFF07F800A87FF05 Ast
    out_attr2.z = temp_179;
    // 0x000778: 0x4C58100C02370202 Fadd
    temp_181 = temp_171 + vp_c3.data[8].w;
    // 0x000788: 0xEFF07F801007FF08 Ast
    out_attr8.x = temp_180;
    // 0x000790: 0x4C58100C02B70303 Fadd
    temp_182 = temp_169 + vp_c3.data[10].w;
    // 0x000798: 0xEFF07F800747FF02 Ast
    gl_Position.y = temp_181;
    // 0x0007A8: 0x4C58100C02770606 Fadd
    temp_183 = temp_172 + vp_c3.data[9].w;
    // 0x0007B0: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_182;
    // 0x0007B8: 0x4C58100C01F70101 Fadd
    temp_184 = temp_175 + vp_c3.data[7].w;
    // 0x0007C8: 0xEFF07F800787FF06 Ast
    gl_Position.z = temp_183;
    // 0x0007D0: 0xEFF07F800707FF01 Ast
    gl_Position.x = temp_184;
    // 0x0007D8: 0xE30000000007000F Exit
    return;
}

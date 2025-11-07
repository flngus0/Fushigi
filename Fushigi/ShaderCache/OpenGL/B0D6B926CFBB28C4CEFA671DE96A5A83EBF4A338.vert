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
layout (location = 9) out vec4 out_attr9;
layout (location = 10) out vec4 out_attr10;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    int temp_14;
    uint temp_15;
    uint temp_16;
    int temp_17;
    precise float temp_18;
    int temp_19;
    uint temp_20;
    uint temp_21;
    int temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    int temp_32;
    uint temp_33;
    uint temp_34;
    int temp_35;
    precise float temp_36;
    int temp_37;
    uint temp_38;
    int temp_39;
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
    precise float temp_50;
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
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400A70013 Mov
    // 0x000010: 0xEFD87F800807FF17 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079400B7000B Mov
    // 0x000030: 0xEFD87F801047FF14 Ald
    temp_3 = in_attr8.y;
    // 0x000038: 0x4C9807940027000A Mov
    // 0x000048: 0xEFD87F800847FF05 Ald
    temp_4 = in_attr0.y;
    // 0x000050: 0x4C98079400370001 Mov
    // 0x000058: 0xEFD87F800907FF1B Ald
    temp_5 = in_attr1.x;
    // 0x000068: 0x3848000000470006 Shl
    temp_6 = temp_2 << 4;
    // 0x000070: 0xEFD87F800887FF0C Ald
    temp_7 = in_attr0.z;
    // 0x000078: 0x4C68101000071707 Fmul
    temp_8 = temp_0 * vp_c4.data[0].x;
    // 0x000088: 0xEFD87F800947FF04 Ald
    temp_9 = in_attr1.y;
    // 0x000090: 0x4C68101000471708 Fmul
    temp_10 = temp_0 * vp_c4.data[1].x;
    // 0x000098: 0xEFD87F801007FF11 Ald
    temp_11 = in_attr8.x;
    // 0x0000A8: 0x4C68101000871717 Fmul
    temp_12 = temp_0 * vp_c4.data[2].x;
    // 0x0000B0: 0xEFD87F800A07FF16 Ald
    temp_13 = in_attr2.x;
    // 0x0000B8: 0xEF9400704887060F Ldc
    temp_14 = temp_6 + 0x488;
    temp_15 = uint(temp_14) >> 2;
    temp_16 = temp_15 >> 2;
    temp_17 = int(temp_15) & 3;
    temp_18 = vp_c7.data[int(temp_16)][temp_17];
    // 0x0000C8: 0xEF94007068870610 Ldc
    temp_19 = temp_6 + 0x688;
    temp_20 = uint(temp_19) >> 2;
    temp_21 = temp_20 >> 2;
    temp_22 = int(temp_20) & 3;
    temp_23 = vp_c7.data[int(temp_21)][temp_22];
    // 0x0000D0: 0x51A0099400C71413 Ffma
    temp_24 = fma(temp_3, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x0000D8: 0xEFD87F801407FF0E Ald
    temp_25 = in_attr12.x;
    // 0x0000E8: 0x51A0059400D7140B Ffma
    temp_26 = fma(temp_3, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x0000F0: 0xEFD87F800A47FF12 Ald
    temp_27 = in_attr2.y;
    // 0x0000F8: 0x51A005140047140A Ffma
    temp_28 = fma(temp_3, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000108: 0xEFD87F801447FF0D Ald
    temp_29 = in_attr12.y;
    // 0x000110: 0x51A0009400571414 Ffma
    temp_30 = fma(temp_3, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000118: 0x49A00B9000970517 Ffma
    temp_31 = fma(temp_4, vp_c4.data[2].y, temp_12);
    // 0x000128: 0xEF95007048070602 Ldc
    temp_32 = temp_6 + 0x480;
    temp_33 = uint(temp_32) >> 2;
    temp_34 = temp_33 >> 2;
    temp_35 = int(temp_33) & 3;
    temp_36 = vp_c7.data[int(temp_34)][temp_35];
    temp_37 = int(temp_33) + 1;
    temp_38 = uint(temp_37) >> 2;
    temp_39 = temp_37 & 3;
    temp_40 = vp_c7.data[int(temp_38)][temp_39];
    // 0x000130: 0xEF95007068070600 Ldc
    temp_41 = temp_6 + 0x680;
    temp_42 = uint(temp_41) >> 2;
    temp_43 = temp_42 >> 2;
    temp_44 = int(temp_42) & 3;
    temp_45 = vp_c7.data[int(temp_43)][temp_44];
    temp_46 = int(temp_42) + 1;
    temp_47 = uint(temp_46) >> 2;
    temp_48 = temp_46 & 3;
    temp_49 = vp_c7.data[int(temp_47)][temp_48];
    // 0x000138: 0x4C68101000071B19 Fmul
    temp_50 = temp_5 * vp_c4.data[0].x;
    // 0x000148: 0xEFD87F800A87FF06 Ald
    temp_51 = in_attr2.z;
    // 0x000150: 0x49A0039000170515 Ffma
    temp_52 = fma(temp_4, vp_c4.data[0].y, temp_8);
    // 0x000158: 0x49A0041000570509 Ffma
    temp_53 = fma(temp_4, vp_c4.data[1].y, temp_10);
    // 0x000168: 0xEFD87F800987FF05 Ald
    temp_54 = in_attr1.z;
    // 0x000170: 0x49A00B9000A70C18 Ffma
    temp_55 = fma(temp_7, vp_c4.data[2].z, temp_31);
    // 0x000178: 0x49A00C9000170408 Ffma
    temp_56 = fma(temp_9, vp_c4.data[0].y, temp_50);
    // 0x000188: 0x49A0099400871113 Ffma
    temp_57 = fma(temp_11, vp_c5.data[2].x, temp_24);
    // 0x000190: 0x49A005940097110B Ffma
    temp_58 = fma(temp_11, vp_c5.data[2].y, temp_26);
    // 0x000198: 0x49A005140007110A Ffma
    temp_59 = fma(temp_11, vp_c5.data[0].x, temp_28);
    // 0x0001A8: 0x49A0049000670C17 Ffma
    temp_60 = fma(temp_7, vp_c4.data[1].z, temp_53);
    // 0x0001B0: 0xEFD87F800AC7FF09 Ald
    temp_61 = in_attr2.w;
    // 0x0001B8: 0x4C58101000B71819 Fadd
    temp_62 = temp_55 + vp_c4.data[2].w;
    // 0x0001C8: 0xEFF07F800B07FF0E Ast
    out_attr3.x = temp_25;
    // 0x0001D0: 0x49A00A9000270C15 Ffma
    temp_63 = fma(temp_7, vp_c4.data[0].z, temp_52);
    // 0x0001D8: 0xEFF07F800B47FF0D Ast
    out_attr3.y = temp_29;
    // 0x0001E8: 0x4C68101000871B1A Fmul
    temp_64 = temp_5 * vp_c4.data[2].x;
    // 0x0001F0: 0xEFF07F800FC7FF0B Ast
    out_attr7.w = temp_58;
    // 0x0001F8: 0x49A00A1400171111 Ffma
    temp_65 = fma(temp_11, vp_c5.data[0].y, temp_30);
    // 0x000208: 0xEFF07F800F07FF0A Ast
    out_attr7.x = temp_59;
    // 0x000210: 0x59A0080000F7190C Ffma
    temp_66 = fma(temp_62, temp_18, temp_23);
    // 0x000218: 0xEFF07F800F47FF11 Ast
    out_attr7.y = temp_65;
    // 0x000228: 0x4C68101000471B1B Fmul
    temp_67 = temp_5 * vp_c4.data[1].x;
    // 0x000230: 0xEFF07F800F87FF13 Ast
    out_attr7.z = temp_57;
    // 0x000238: 0x4C58101000771714 Fadd
    temp_68 = temp_60 + vp_c4.data[1].w;
    // 0x000248: 0xEFF07F800E87FF0C Ast
    out_attr6.z = temp_66;
    // 0x000250: 0x4C68101406971616 Fmul
    temp_69 = temp_13 * vp_c5.data[26].y;
    // 0x000258: 0x4C58101000371515 Fadd
    temp_70 = temp_63 + vp_c4.data[0].w;
    // 0x000268: 0x49A00D1000970407 Ffma
    temp_71 = fma(temp_9, vp_c4.data[2].y, temp_64);
    // 0x000270: 0x4C5810180BA70C0E Fadd
    temp_72 = temp_66 + vp_c6.data[46].z;
    // 0x000278: 0x49A00D9000570404 Ffma
    temp_73 = fma(temp_9, vp_c4.data[1].y, temp_67);
    // 0x000288: 0x59A0008000371401 Ffma
    temp_74 = fma(temp_68, temp_40, temp_49);
    // 0x000290: 0x4C68101406971212 Fmul
    temp_75 = temp_27 * vp_c5.data[26].y;
    // 0x000298: 0xEFF07F800E47FF01 Ast
    out_attr6.y = temp_74;
    // 0x0002A8: 0x4C68101000071617 Fmul
    temp_76 = temp_69 * vp_c4.data[0].x;
    // 0x0002B0: 0x59A0000000271503 Ffma
    temp_77 = fma(temp_70, temp_36, temp_45);
    // 0x0002B8: 0x4C68101000871618 Fmul
    temp_78 = temp_69 * vp_c4.data[2].x;
    // 0x0002C8: 0xEFF07F800E07FF03 Ast
    out_attr6.x = temp_77;
    // 0x0002D0: 0x4C6810180C270E02 Fmul
    temp_79 = temp_72 * vp_c6.data[48].z;
    // 0x0002D8: 0x4C6810180C670E0D Fmul
    temp_80 = temp_72 * vp_c6.data[49].z;
    // 0x0002E8: 0x49A0041000270508 Ffma
    temp_81 = fma(temp_54, vp_c4.data[0].z, temp_56);
    // 0x0002F0: 0x49A0039000A70507 Ffma
    temp_82 = fma(temp_54, vp_c4.data[2].z, temp_71);
    // 0x0002F8: 0x4C5810180B970100 Fadd
    temp_83 = temp_74 + vp_c6.data[46].y;
    // 0x000308: 0x4C6810180CA70E0E Fmul
    temp_84 = temp_72 * vp_c6.data[50].z;
    // 0x000310: 0x49A0021000670504 Ffma
    temp_85 = fma(temp_54, vp_c4.data[1].z, temp_73);
    // 0x000318: 0x4C68101000471619 Fmul
    temp_86 = temp_69 * vp_c4.data[1].x;
    // 0x000328: 0x49A00B900017120F Ffma
    temp_87 = fma(temp_75, vp_c4.data[0].y, temp_76);
    // 0x000330: 0x4C68101406970605 Fmul
    temp_88 = temp_51 * vp_c5.data[26].y;
    // 0x000338: 0x49A00C1000971210 Ffma
    temp_89 = fma(temp_75, vp_c4.data[2].y, temp_78);
    // 0x000348: 0x49A001180C170014 Ffma
    temp_90 = fma(temp_83, vp_c6.data[48].y, temp_79);
    // 0x000350: 0x49A006980C57000D Ffma
    temp_91 = fma(temp_83, vp_c6.data[49].y, temp_80);
    // 0x000358: 0x49A007180C97000E Ffma
    temp_92 = fma(temp_83, vp_c6.data[50].y, temp_84);
    // 0x000368: 0x4C5810180B87030B Fadd
    temp_93 = temp_77 + vp_c6.data[46].x;
    // 0x000370: 0x49A00C9000571212 Ffma
    temp_94 = fma(temp_75, vp_c4.data[1].y, temp_86);
    // 0x000378: 0x49A0079000270500 Ffma
    temp_95 = fma(temp_88, vp_c4.data[0].z, temp_87);
    // 0x000388: 0x49A0081000A70502 Ffma
    temp_96 = fma(temp_88, vp_c4.data[2].z, temp_89);
    // 0x000390: 0x5C68100000870806 Fmul
    temp_97 = temp_81 * temp_81;
    // 0x000398: 0x4C68100C0047030F Fmul
    temp_98 = temp_77 * vp_c3.data[1].x;
    // 0x0003A8: 0x49A006980C470B10 Ffma
    temp_99 = fma(temp_93, vp_c6.data[49].x, temp_91);
    // 0x0003B0: 0x49A0091000670505 Ffma
    temp_100 = fma(temp_88, vp_c4.data[1].z, temp_94);
    // 0x0003B8: 0x5C6810000007000A Fmul
    temp_101 = temp_95 * temp_95;
    // 0x0003C8: 0x49A00A180C070B14 Ffma
    temp_102 = fma(temp_93, vp_c6.data[48].x, temp_90);
    // 0x0003D0: 0x59A003000047040D Ffma
    temp_103 = fma(temp_85, temp_85, temp_97);
    // 0x0003D8: 0x49A007180C870B11 Ffma
    temp_104 = fma(temp_93, vp_c6.data[50].x, temp_92);
    // 0x0003E8: 0x4C6810180BB71012 Fmul
    temp_105 = temp_99 * vp_c6.data[46].w;
    // 0x0003F0: 0x4C5830180B07030B Fadd
    temp_106 = 0.0 - vp_c6.data[44].x;
    temp_107 = temp_77 + temp_106;
    // 0x0003F8: 0xEFF07F801247FF12 Ast
    out_attr10.y = temp_105;
    // 0x000408: 0x59A0050000570510 Ffma
    temp_108 = fma(temp_100, temp_100, temp_101);
    // 0x000410: 0x59A006800077070A Ffma
    temp_109 = fma(temp_82, temp_82, temp_103);
    // 0x000418: 0x49A0078C0057010D Ffma
    temp_110 = fma(temp_74, vp_c3.data[1].y, temp_98);
    // 0x000428: 0x5080000000570A0A Mufu
    temp_111 = inversesqrt(temp_109);
    // 0x000430: 0x4C58300C03370115 Fadd
    temp_112 = 0.0 - vp_c3.data[12].w;
    temp_113 = temp_74 + temp_112;
    // 0x000438: 0x4C68100C00870306 Fmul
    temp_114 = temp_77 * vp_c3.data[2].x;
    // 0x000448: 0xEFF07F800C47FF15 Ast
    out_attr4.y = temp_113;
    // 0x000450: 0x59A0080000270210 Ffma
    temp_115 = fma(temp_96, temp_96, temp_108);
    // 0x000458: 0x4C68100C0007030E Fmul
    temp_116 = temp_77 * vp_c3.data[0].x;
    // 0x000468: 0x508000000057100F Mufu
    temp_117 = inversesqrt(temp_115);
    // 0x000470: 0x4C58300C02F70313 Fadd
    temp_118 = 0.0 - vp_c3.data[11].w;
    temp_119 = temp_77 + temp_118;
    // 0x000478: 0x4C68101803870B03 Fmul
    temp_120 = temp_107 * vp_c6.data[14].x;
    // 0x000488: 0xEFF07F800C07FF13 Ast
    out_attr4.x = temp_119;
    // 0x000490: 0x4C5830180B170115 Fadd
    temp_121 = 0.0 - vp_c6.data[44].y;
    temp_122 = temp_74 + temp_121;
    // 0x000498: 0x4C58101002070C0B Fadd
    temp_123 = temp_66 + vp_c4.data[8].x;
    // 0x0004A8: 0x49A0030C00970106 Ffma
    temp_124 = fma(temp_74, vp_c3.data[2].y, temp_114);
    // 0x0004B0: 0x49A0070C0017010E Ffma
    temp_125 = fma(temp_74, vp_c3.data[0].y, temp_116);
    // 0x0004B8: 0x5C68100000A70707 Fmul
    temp_126 = temp_82 * temp_111;
    // 0x0004C8: 0x5C68100000A70808 Fmul
    temp_127 = temp_81 * temp_111;
    // 0x0004D0: 0xEFF07F800887FF07 Ast
    out_attr0.z = temp_126;
    // 0x0004D8: 0x4C6810180BB71113 Fmul
    temp_128 = temp_104 * vp_c6.data[46].w;
    // 0x0004E8: 0xEFF07F800807FF08 Ast
    out_attr0.x = temp_127;
    // 0x0004F0: 0x49A0019803971515 Ffma
    temp_129 = fma(temp_122, vp_c6.data[14].y, temp_120);
    // 0x0004F8: 0xEFF07F801287FF13 Ast
    out_attr10.z = temp_128;
    // 0x000508: 0x5C68100000F70505 Fmul
    temp_130 = temp_100 * temp_117;
    // 0x000510: 0x49A0030C00A70B03 Ffma
    temp_131 = fma(temp_123, vp_c3.data[2].z, temp_124);
    // 0x000518: 0xEFF07F800947FF05 Ast
    out_attr1.y = temp_130;
    // 0x000528: 0x49A0030C00A70C11 Ffma
    temp_132 = fma(temp_66, vp_c3.data[2].z, temp_124);
    // 0x000530: 0x5C68100000F70202 Fmul
    temp_133 = temp_96 * temp_117;
    // 0x000538: 0x49A0070C00270B06 Ffma
    temp_134 = fma(temp_123, vp_c3.data[0].z, temp_125);
    // 0x000548: 0xEFF07F800987FF02 Ast
    out_attr1.z = temp_133;
    // 0x000550: 0x49A0070C00270C0E Ffma
    temp_135 = fma(temp_66, vp_c3.data[0].z, temp_125);
    // 0x000558: 0x49A0068C00670B01 Ffma
    temp_136 = fma(temp_123, vp_c3.data[1].z, temp_110);
    // 0x000568: 0x5C68100000A7040B Fmul
    temp_137 = temp_85 * temp_111;
    // 0x000570: 0x5C68100000F70004 Fmul
    temp_138 = temp_95 * temp_117;
    // 0x000578: 0xEFF07F800847FF0B Ast
    out_attr0.y = temp_137;
    // 0x000588: 0x5C68100000770500 Fmul
    temp_139 = temp_130 * temp_126;
    // 0x000590: 0xEFF07F800907FF04 Ast
    out_attr1.x = temp_138;
    // 0x000598: 0x5C6810000087020A Fmul
    temp_140 = temp_133 * temp_127;
    // 0x0005A8: 0x4C58100C00370606 Fadd
    temp_141 = temp_134 + vp_c3.data[0].w;
    // 0x0005B0: 0x49A0068C00670C0D Ffma
    temp_142 = fma(temp_66, vp_c3.data[1].z, temp_110);
    // 0x0005B8: 0x4C58100C00370E0E Fadd
    temp_143 = temp_135 + vp_c3.data[0].w;
    // 0x0005C8: 0x4C58300C03770C16 Fadd
    temp_144 = 0.0 - vp_c3.data[13].w;
    temp_145 = temp_66 + temp_144;
    // 0x0005D0: 0x4C5830180B270C12 Fadd
    temp_146 = 0.0 - vp_c6.data[44].z;
    temp_147 = temp_66 + temp_146;
    // 0x0005D8: 0xEFF07F800C87FF16 Ast
    out_attr4.z = temp_145;
    // 0x0005E8: 0x59A2000000B7020C Ffma
    temp_148 = 0.0 - temp_139;
    temp_149 = fma(temp_133, temp_137, temp_148);
    // 0x0005F0: 0x5C68100000B7040B Fmul
    temp_150 = temp_138 * temp_137;
    // 0x0005F8: 0x59A205000077040A Ffma
    temp_151 = 0.0 - temp_140;
    temp_152 = fma(temp_138, temp_126, temp_151);
    // 0x000608: 0x4C68100C02870600 Fmul
    temp_153 = temp_141 * vp_c3.data[10].x;
    // 0x000610: 0x4C68100C02470602 Fmul
    temp_154 = temp_141 * vp_c3.data[9].x;
    // 0x000618: 0x4C68100C02070604 Fmul
    temp_155 = temp_141 * vp_c3.data[8].x;
    // 0x000628: 0x4C58100C00770D0D Fadd
    temp_156 = temp_142 + vp_c3.data[1].w;
    // 0x000630: 0x4C68101802C70E0E Fmul
    temp_157 = temp_143 * vp_c6.data[11].x;
    // 0x000638: 0x4C58100C00770101 Fadd
    temp_158 = temp_136 + vp_c3.data[1].w;
    // 0x000648: 0x4C68100C01C70606 Fmul
    temp_159 = temp_141 * vp_c3.data[7].x;
    // 0x000650: 0x4C58100C00B71111 Fadd
    temp_160 = temp_132 + vp_c3.data[2].w;
    // 0x000658: 0x4C58100C00B70303 Fadd
    temp_161 = temp_131 + vp_c3.data[2].w;
    // 0x000668: 0xEFF07F800D87FF11 Ast
    out_attr5.z = temp_160;
    // 0x000670: 0x49A0071802D70D0E Ffma
    temp_162 = fma(temp_156, vp_c6.data[11].y, temp_157);
    // 0x000678: 0x49A0000C02970100 Ffma
    temp_163 = fma(temp_158, vp_c3.data[10].y, temp_153);
    // 0x000688: 0x49A0010C02570102 Ffma
    temp_164 = fma(temp_158, vp_c3.data[9].y, temp_154);
    // 0x000690: 0x49A0020C02170104 Ffma
    temp_165 = fma(temp_158, vp_c3.data[8].y, temp_155);
    // 0x000698: 0x49A0030C01D70106 Ffma
    temp_166 = fma(temp_158, vp_c3.data[7].y, temp_159);
    // 0x0006A8: 0x59A205800087050B Ffma
    temp_167 = 0.0 - temp_150;
    temp_168 = fma(temp_130, temp_127, temp_167);
    // 0x0006B0: 0x49A00A9803A71212 Ffma
    temp_169 = fma(temp_147, vp_c6.data[14].z, temp_129);
    // 0x0006B8: 0x4C98079803C70010 Mov
    // 0x0006C8: 0x49A0071802E7110E Ffma
    temp_170 = fma(temp_160, vp_c6.data[11].z, temp_162);
    // 0x0006D0: 0x4C98079803070005 Mov
    // 0x0006D8: 0x49A0000C02A70300 Ffma
    temp_171 = fma(temp_161, vp_c3.data[10].z, temp_163);
    // 0x0006E8: 0x49A0010C02670302 Ffma
    temp_172 = fma(temp_161, vp_c3.data[9].z, temp_164);
    // 0x0006F0: 0x49A0020C02270304 Ffma
    temp_173 = fma(temp_161, vp_c3.data[8].z, temp_165);
    // 0x0006F8: 0x49A0030C01E70306 Ffma
    temp_174 = fma(temp_161, vp_c3.data[7].z, temp_166);
    // 0x000708: 0x4C6810180BB71414 Fmul
    temp_175 = temp_102 * vp_c6.data[46].w;
    // 0x000710: 0x51A0081803B71212 Ffma
    temp_176 = fma(temp_169, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000718: 0xEFF07F801207FF14 Ast
    out_attr10.x = temp_175;
    // 0x000728: 0x5C68100000970C0C Fmul
    temp_177 = temp_149 * temp_61;
    // 0x000730: 0xEFF07F801147FF12 Ast
    out_attr9.y = temp_176;
    // 0x000738: 0x5C68100000970A0A Fmul
    temp_178 = temp_152 * temp_61;
    // 0x000748: 0xEFF07F800A07FF0C Ast
    out_attr2.x = temp_177;
    // 0x000750: 0x5C68100000970B0B Fmul
    temp_179 = temp_168 * temp_61;
    // 0x000758: 0xEFF07F800A47FF0A Ast
    out_attr2.y = temp_178;
    // 0x000768: 0x51A0029802F70E0E Ffma
    temp_180 = fma(temp_170, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000770: 0xEFF07F800A87FF0B Ast
    out_attr2.z = temp_179;
    // 0x000778: 0x4C58100C02B70000 Fadd
    temp_181 = temp_171 + vp_c3.data[10].w;
    // 0x000788: 0xEFF07F801107FF0E Ast
    out_attr9.x = temp_180;
    // 0x000790: 0x4C58100C02770202 Fadd
    temp_182 = temp_172 + vp_c3.data[9].w;
    // 0x000798: 0xEFF07F8007C7FF00 Ast
    gl_Position.w = temp_181;
    // 0x0007A8: 0x4C58100C02370404 Fadd
    temp_183 = temp_173 + vp_c3.data[8].w;
    // 0x0007B0: 0xEFF07F800787FF02 Ast
    gl_Position.z = temp_182;
    // 0x0007B8: 0x4C58100C01F70606 Fadd
    temp_184 = temp_174 + vp_c3.data[7].w;
    // 0x0007C8: 0xEFF07F800747FF04 Ast
    gl_Position.y = temp_183;
    // 0x0007D0: 0xEFF07F800707FF06 Ast
    gl_Position.x = temp_184;
    // 0x0007D8: 0xE30000000007000F Exit
    return;
}
